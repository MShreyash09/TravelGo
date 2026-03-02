exports.translateText = async (req, res) => {
    try {
        const { text, targetLanguage } = req.body;

        if (!text || !targetLanguage) {
            return res.status(400).json({ message: "Text and targetLanguage are required" });
        }

        // Sarvam AI expects specific language codes like 'hi-IN' for Hindi, 'bn-IN' for Bengali, etc.
        // Ensure `targetLanguage` matches their required format.

        const response = await fetch("https://api.sarvam.ai/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-subscription-key": process.env.SARVAM_API_KEY,
            },
            body: JSON.stringify({
                input: text,
                source_language_code: "en-IN", // Assuming your default app language is English
                target_language_code: targetLanguage,
                speaker_gender: "Male", // Required by some models
                mode: "formal",
                model: "mayura:v1", // Sarvam's translation model
                enable_preprocessing: true,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to translate");
        }

        res.json({ translatedText: data.translated_text });
    } catch (err) {
        console.error("TRANSLATION ERROR:", err);
        res.status(500).json({ message: "Server error during translation" });
    }
};
