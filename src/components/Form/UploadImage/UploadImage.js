import React, { useState } from 'react';

export default props => {

    const [image, setImage] = useState(props.image ? props.image : 'http://i.pravatar.cc/500?img=7');

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                setImage(e.target.result);
                props.setLogo(e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    return (
        <div className="avatar-upload">
            <div className="avatar-edit">
                <input type='file' id="imageUpload" disabled={props.disabled} onChange={e => readURL(e.target)} accept=".png, .jpg, .jpeg" />
                <label htmlFor="imageUpload">
                    <i className="fas fa-edit"></i>
                </label>
            </div>
            <div className="avatar-preview">
                <div id="imagePreview" style={{ backgroundImage: `url(${image})` }}>
                </div>
            </div>
        </div>
    );
};
