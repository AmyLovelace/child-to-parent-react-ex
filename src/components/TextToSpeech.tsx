// src/components/TextToSpeech.tsx
import React, { useState } from 'react';
import * as tts from '@diffusionstudio/vits-web';

const TextToSpeech: React.FC = () => {
    const [text, setText] = useState('');
    const [audioSrc, setAudioSrc] = useState<string | null>(null);

    const handleTextToSpeech = async () => {
        const wav = await tts.predict({
            text: text,
            voiceId: "ca_ES-upc_ona-medium", // Asegúrate de usar un voiceId válido
        });
        const audioURL = URL.createObjectURL(wav);
        setAudioSrc(audioURL);
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribe algo aquí..."
            />
            <button onClick={handleTextToSpeech}>Generar Voz</button>
            {audioSrc && <audio src={audioSrc} controls autoPlay />}
        </div>
    );
};

export default TextToSpeech;
