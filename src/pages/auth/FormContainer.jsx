const FormContainer = (props) => {
const {children} = props;

return <div className="flex" >
        <div className="relative hidden md:flex"> I
            <img className="object-cover h-screen" src="https://d1d9816gvj4fau.cloudfront.net/capstone_sign_in_scene.png" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-green-800/40"></div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center h-screen bg-green-50">
            <div className="flex flex-col items-center m-4">
                <img className="w-16 mb-2" src="https://d1d9816gvj4fau.cloudfront.net/capstone_logo_dark.png" />
                <div className="text-3xl font-playfair ☐ text-emerald-700">
                    Mine Plants
                </div>
            </div>
                {children}
        </div>
        </div>
};

export default FormContainer;