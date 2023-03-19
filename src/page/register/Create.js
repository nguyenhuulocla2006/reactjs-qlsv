import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateRegisterForm from '../../component/CreateRegisterForm';
import axios from 'axios';
import { toast } from 'react-toastify';

import slugify from 'react-slugify';
import { getAcessToken } from '../../common/util';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import Loading from '../../component/Loading';

export function Create() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [studentOptions, setStudentOptions] = useState([]);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const navigate = useNavigate();
  const handleCreate = async (values) => {
    try {
      let response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/registers`, JSON.stringify(values),
        {
          headers: {
            'Authorization': `Bearer ${getAcessToken()}`
          }
        }
      );
      const data = response.data;
      const student_name = data.student_name;
      const subject_name = data.subject_name;
      toast.success(`Sinh viên ${student_name} đăng ký môn học ${subject_name} thành công`);
      // action.resetForm();//function của formik
      const fullRegisterName = `${student_name}-${subject_name}`;
      navigate(`/register/${slugify(fullRegisterName, { lower: true })}-${data.id}.html`);
    }
    catch (error) {

      toast.error(error?.response?.data || error.message);
    };
  }

  const getStudentAndSubjectList = async () => {
    try {
      let studentResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/students?list=all`,
        {
          headers: {
            'Authorization': `Bearer ${getAcessToken()}`
          }
        }
      );
      setStudentOptions(studentResponse.data.items);

      let subjectResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/subjects?list=all`,
        {
          headers: {
            'Authorization': `Bearer ${getAcessToken()}`
          }
        }
      );
      setSubjectOptions(subjectResponse.data.items);
      setIsLoaded(true);
    }
    catch (error) {

      toast.error(error?.response?.data || error.message);
    };
  }

  useEffect(() => {
    getStudentAndSubjectList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div>
        <h1>Thêm đăng ký môn học</h1>
        <Helmet>
          <title>Thêm đăng ký môn học| QLSV</title>
        </Helmet>
        {
          !isLoaded ?
            <Loading />
            :
            <CreateRegisterForm handleCreate={handleCreate} studentOptions={studentOptions} subjectOptions={subjectOptions} />
        }

      </div>

    </>
  );
}
