const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const handleSignup = async(formData) => {
    try {
        const response = await fetch(`${BACKEND_URL}/auth/early-signup`, {
            method:'POST',
            body:JSON.stringify(formData),
            headers:{"Content-type":'application/json'},
        });

        const data = await response.json();
        if(!response.ok) return {error:data};
        return data;
    }
    catch(err) {
        console.log(err.message);
        return {error:err.message};
    }
}

export default handleSignup;