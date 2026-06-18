const upload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    // ---------------------------------------------------------
    // Enter your Cloudinary credentials here:
    // 1. Cloud Name (can be found on your Cloudinary Dashboard)
    // 2. Upload Preset (must be an UNSIGNED preset created in settings)
    // ---------------------------------------------------------
    const cloudName = "dhxivvwat";
    const uploadPreset = "Chat App";

    formData.append("upload_preset", uploadPreset);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.secure_url) {
            return result.secure_url; // Returns the public secure URL of the image
        } else {
            throw new Error(result.error ? result.error.message : "Cloudinary upload failed");
        }
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        throw error;
    }
};

export default upload;