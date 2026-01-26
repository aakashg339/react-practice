import { useEffect } from 'react';
import './App.css'
import {useForm} from 'react-hook-form'

function App() {
  const {register, handleSubmit, reset, watch, formState: {errors}} = useForm();
  
  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    reset();
  }

  // const validateName = (value) => {
  //   if(value !== 'admin') {
  //     return 'Only admin is allowed';
  //   }
  //   return true;
  // };

  // console.log(watch('name'));

  // const watchedName = watch('name');
  // const watchedEmail = watch('email');

  // useEffect(() => {
  //   console.log('Name ', watchedName);
  // }, [watchedName]);

  // useEffect(() => {
  //   console.log('Email ', watchedEmail);
  // }, [watchedEmail]);

  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          {/* <input {...register('name', {required: true, minLength: 2})} /> */}
          <input {...register('name', 
              {required: 'Name is required', 
                minLength: {value: 2, 
                  message:'Name should be atleast 2 character'
                            },
                // validate: validateName,
                validate: {
                  notAdmin: (value) => value !== "admin" || "Admin is not allowed",
                  isNotNumber: (value) => isNaN(value) || "Name cannot be number",
                }
              }
          )} />
        </label>
        {errors.name && <p>{errors.name.message}</p>}

        <label>
          Email:
          <input {...register('email', {required: 'Email is required', pattern: {value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Enter a valid email'}})} />
        </label>
        {errors.email && <p>{errors.email.message}</p>}

        <button type='submit'>Submit</button>
        <button type='button' onClick={() => reset()}>Reset</button>
      </form>
    </div>
  )
}

export default App
