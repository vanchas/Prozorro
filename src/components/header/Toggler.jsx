import React, { useState } from "react";
import "./header.scss";
import languages from "../data/languages.json";

export default function Toggler({ setLang }) {
	const [checked, setChecked] = useState(false);

	const toggle = () => {
		setChecked(!checked);
		setLang(!checked ? languages.ru : languages.ua);
	};

	return (
		<span>
			<label className="switch">
				<input type="checkbox" onChange={toggle} checked={checked} />
				<span className="slider round"></span>
			</label>
			{!checked && (
				<span className="flag-ua" onClick={toggle}>
					ua
				</span>
			)}
			{checked && (
				<span className="flag-ru" onClick={toggle}>
					ru
				</span>
			)}
		</span>
	);
}
