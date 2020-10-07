import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const onSubmit = data => {
        // console.log('form submitted', data)
        const allData = { ...loggedInUser, data }

        fetch('https://volunteer123.herokuapp.com/AddRegistrations', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('order placed successfully')
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* include validation with required or other standard HTML validation rules */}
                <input name="Full Name" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                {/* include validation with required or other standard HTML validation rules */}
                <input name=" Username or Email" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                {/* include validation with required or other standard HTML validation rules */}
                <input name="Date" type="Date" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                {/* include validation with required or other standard HTML validation rules */}
                <input name="Description" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                {/* include validation with required or other standard HTML validation rules */}
                <input name="Volunteer category" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}



                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;