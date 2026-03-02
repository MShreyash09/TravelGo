import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translateContent } from "../api";

const translationCache = {}; // Simple in-memory cache to prevent redundant API calls

export function useTranslation(text) {
    const { language } = useContext(LanguageContext);
    const [translatedText, setTranslatedText] = useState(text);

    useEffect(() => {
        // Basic formatting safety: if text is empty or just whitespace, skip.
        if (!text || typeof text !== "string" || text.trim() === "") {
            setTranslatedText(text);
            return;
        }

        if (language === "en-IN") {
            setTranslatedText(text);
            return;
        }

        const cacheKey = `${language}-${text}`;
        if (translationCache[cacheKey]) {
            setTranslatedText(translationCache[cacheKey]);
            return;
        }

        translateContent(text, language)
            .then((res) => {
                const result = res.translatedText || text;
                translationCache[cacheKey] = result;
                setTranslatedText(result);
            })
            .catch((err) => {
                console.error("Translation error", err);
                setTranslatedText(text); // fallback to original text
            });
    }, [text, language]);

    return translatedText;
}
