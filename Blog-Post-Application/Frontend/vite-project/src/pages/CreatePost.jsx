import axios from "axios";
import {useNavigate} from "react-router-dom"
const CreatePost = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        axios.post(
            "https://scaling-umbrella-q7x976jwwg653x9vg-3000.app.github.dev/create-post",
            formData
        )
        .then((res) => {
            // console.log(res.data);
            navigate("/feed")
        })
        .catch((error) => {
            console.log(error.response?.data || error);
        });
    };

    return (
        <section className="create-post-section">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                />

                <input
                    type="text"
                    name="caption"
                    required
                />

                <button type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default CreatePost;