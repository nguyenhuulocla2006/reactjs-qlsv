import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateSubjectForm from '../../component/CreateSubjectForm';
import axios from 'axios';
import { toast } from 'react-toastify';

import slugify from 'react-slugify';
import { getAcessToken } from '../../common/util';
import { Helmet } from 'react-helmet';

export function Create() {
  const navigate = useNavigate();
  const handleCreate = async (values) => {
    try {
      let response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/subjects`, JSON.stringify(values),
        {
          headers: {
            'Authorization': `Bearer ${getAcessToken()}`
          }
        }
      );
      const data = response.data;
      const name = data.name;
      toast.success(`Đã tạo môn học ${name} thành công`);
      // action.resetForm();//function của formik
      navigate(`/subject/${slugify(data.name, { lower: true })}-${data.id}.html`);
    }
    catch (error) {

      toast.error(error?.response?.data || error.message);
    };
  }

  return (
    <>
      <div>
        <h1>Thêm môn học</h1>
        <Helmet>
          <title>Thêm môn học| QLSV</title>
        </Helmet>
        <CreateSubjectForm handleCreate={handleCreate} />
      </div>

    </>
  );
}
