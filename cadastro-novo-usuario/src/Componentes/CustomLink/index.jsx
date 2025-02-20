import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomLink = styled(Link) `
	color: #606C38;
	text-decoration: none;
	display: inline-block;
	width: 100%;
	margin-bottom: 0.3em;
	text-align: left;

	&&:hover {
		text-decoration: underline;
		color: #283618;
	}
`;

export default CustomLink;