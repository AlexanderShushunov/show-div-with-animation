import clsx from "clsx";
import type { FC } from "react";

import styles from "./ShowHideWithEffect.module.css";

type Props = {
    visible: boolean;
};

export const ShowHideWithEffect: FC<Props> = ({
    visible,
}) => {
    return (
        <div
            className={clsx(styles.showHideWithEffect, {
                [styles.visible]: visible,
            })}
        />
    );
};
