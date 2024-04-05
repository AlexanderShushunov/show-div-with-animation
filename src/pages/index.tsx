import { useEffect, useState } from "react";
import { ShowHideWithEffect } from "./ShowHideWithEffect";

export default function Home() {
    const [visible, setVisible] = useState(true);
    const [exist, setExist] = useState(false);
    const [enhancedVisible, setEnhancedVisible] = useState(false);

    useEffect(() => {
        setExist(visible)

        const requestId = requestAnimationFrame(() => {
            setEnhancedVisible(visible && exist);
        });
        return () => cancelAnimationFrame(requestId);
    }, [visible, exist]);

    return (
        <>
            Refresh page ond/or  toggle exist. The div should appear with animation.
            <br />
            <button
                onClick={() => setVisible(prev => !prev)}
            >
                Toggle Visibility ({String(visible)})
            </button>
            {exist && <ShowHideWithEffect visible={enhancedVisible} />}
        </>
    );
}
