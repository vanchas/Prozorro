import React, { useEffect, useState } from "react";


const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <div style={{ background: '#fafafa' }} className="py-2 d-flex justify-content-center justify-items-center">
      <button
        className="link-button btn text-white"
        style={{ background: '#02bfdd' }}
        id="setup_button"
        aria-label="Install app"
        title="Install app"
        onClick={onClick}
      >
        Добавить <b>Prozorro</b> на рабочий стол
    </button>
    </div>
  );
};

export default InstallPWA;
