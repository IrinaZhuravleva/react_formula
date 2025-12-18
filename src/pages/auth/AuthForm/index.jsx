import { useState } from 'react';

import Field from './Field';

const AuthForm = (props) => {
    const { fields, submitButtonLabel, onSubmit } = props;
    const [values, setValues] = useState(() => {
        const initialValues = {};
        fields.forEach((field) => {
            initialValues[field.label] = '';
        });
        
        return initialValues;
    });
    const [loading, setLoading] = useState(false);


    return (
            <form className="flex w-sm bg-white flex-col p-5 rounded-md shadow-xl mt-8 border border-neutral-200"
                    onSubmit={ async(e) => {
                                e.preventDefault();
                                setLoading(true);
                                await onSubmit(values);
                                setLoading(false);
                        }}
                >
                {fields.map((field) => (
                    <Field
                        key={field.label}
                        type={field.inputType}
                        label={field.label}
                        value={values[field.label]}
                        onChange={(e) =>
                        setValues({
                            ...values,
                            [field.label]: e.target.value
                        })
                    }
                    />
                ))}
                <button
                    type="submit"
                    className="relative bg-green-700 text-white rounded-md p-2 mt-4 hover:bg-green-800 transition-colors font-semibold cursor-pointer"
                >
                    {submitButtonLabel}
                    {loading && (
                        <div className="absolute right-0 top-0 h-full flex items-center">
                            <i className="fa-solid fa-spinner text-3xl text-green-100 animate-spin mr-5"></i>
                        </div>
                    )}
                </button>
            </form>
    );
};

export default AuthForm;
