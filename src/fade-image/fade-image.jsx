import React, { useEffect, useState, useMemo } from "react";
import styles from "./fade-image.module.less";
import cx from "classnames";

const FadeImage = ({ src, maxWidth }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!src) return;

        let cancelled = false;

        // reset fade when src changes
        setLoaded(false);

        const img = new Image();

        img.onload = () => {
            if (!cancelled) {
                setLoaded(true);
            }
        };

        img.src = src;

        return () => {
            cancelled = true;
        };
    }, [src]);

    const className = cx(styles["fade-image"], {
        [styles.show]: loaded,
    });

    const style = useMemo(() => {
        if (!maxWidth) return undefined;

        return {
            maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
        };
    }, [maxWidth]);

    return <img className={className} src={src} style={style} />;
};

export default FadeImage;
