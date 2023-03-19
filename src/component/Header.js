import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from './Menu';
import ModuleLink from './ModuleLink';

export default function Header(props) {
    return (
        <>

            <Menu />
            <ModuleLink />
            <ToastContainer />
        </>
    );
}
