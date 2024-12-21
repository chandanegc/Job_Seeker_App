import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Form, Link, redirect , useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { SmallLogo } from '../components/Logo';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); 

  try {
    const res = await customFetch.post('/auth/login', data);
    toast.success(res.data.msg);
    console.log("chandan")
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
  
};

const Login = () => {
  const navigation = useNavigation() ;
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <SmallLogo />
        <h4>Login</h4>
        <FormRow type='email' name='email' defaultValue='chandanegc@gmail.com' />
        <FormRow type='password' name='password' defaultValue='00000000' />
        <button
            className='btn btn-block form-btn'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submitting...' : 'Submit'}
        </button>
        <button type='button' className='btn btn-block'>
          explore the app
        </button>
       
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;