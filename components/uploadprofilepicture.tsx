import { useState } from "react"


export default function UploadProfilePicture() {
    const [selectedImage, setSelectedImage] = useState('')

    const handleImageUpload = async (e: any) => {
        const file = e.target.files[0]
        if (file) {
            const imageURL = URL.createObjectURL(file)
            setSelectedImage(imageURL)
        }
    }

    return (
        <>
        <h2 className="card-title title-center">Add a Profile Picture</h2>

        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        {selectedImage && (
            <div>
                <img src={selectedImage} alt="preview" />
            </div>
        )}
        </>
    )
}
