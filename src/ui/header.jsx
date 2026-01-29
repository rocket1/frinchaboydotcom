import React from 'react';
import styles from './header.module.less';
import { Links } from './links';

export const Header = ({ openModal }) => {
  return (
    <div className={styles['header']}>
      <div className={styles['hero']}>
        <div className={styles['hero-text']}>
          <h1>Jason Frinchaboy</h1>
        </div>
        <Links openModal={openModal} />
        <h2>jazzmongrel@gmail.com
          <button
            type="button"
            className={`${styles["content-copy-icon"]} material-icons`}
            aria-label="Copy email to clipboard"
            onClick={async () => {
              const text = "jazzmongrel@gmail.com";
              try {
                await navigator.clipboard.writeText(text);
                // optional: show toast / set state like "Copied!"
              } catch (err) {
                // Fallback (older browsers / permission issues)
                const ta = document.createElement("textarea");
                ta.value = text;
                ta.setAttribute("readonly", "");
                ta.style.position = "fixed";
                ta.style.left = "-9999px";
                document.body.appendChild(ta);
                ta.select();
                document.execCommand("copy");
                document.body.removeChild(ta);
              }
            }}
          >
            content_copy
          </button>
        </h2>
      </div>
    </div>
  )

}


