const Field = (props) => {
    const { label, type, value, onChange } = props;
    
    return (
            <div key={label} className="flex flex-col mb-2">
                <label
                    htmlFor={label}
                    className="text-md font-lato text-neutral-600"
                >
                    {label}
                </label>

                <input
                    id={label}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="focus:ring-1 focus:ring-green-700 outline-none focus:outline-none focus:border-green-700 border border-neutral-200 p-1 rounded-md bg-neutral-50"
                />
            </div>
    );
};

export default Field;