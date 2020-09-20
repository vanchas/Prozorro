import React, {useEffect, useState} from "react";
import "./header.scss";

export default function Toggler({ setLang }) {
	const [checked, setChecked] = useState(false);

	const toggle = () => {
		setChecked(!checked);
		setLang(!checked ? 'ru' : 'ua');
	};

	useEffect(() => {
		if (localStorage.getItem('pro-lang') === 'ru') {
			setChecked(true)
		}
	})

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
