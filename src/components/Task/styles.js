import styled from 'styled-components';

export const ContainerTask = styled.div`
	border-top: 1px solid #DCDCDC;
	padding: 10px 16px;

	button {
		background-color: transparent;
		border: none;
		outline:none;
		cursor: pointer;
	}

	.check_title{
		display: flex;
		align-items: center;
		max-width: 90%;

		span{
			margin-left: 5px;
			overflow: hidden;
		}
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-content: center;
	font-size: 15px;
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	color: #424242;

	& button {
		transform: ${ props => props.show ? 'rotate(90deg)' : 'rotate(0deg)' };
		transition-duration: 150ms;
	}
`;

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 8px;

	span {
		font-size: 15px;
		font-weight: 300;
	}

	div {
		display: flex;
		justify-content: flex-end;
	}

	button {
		padding: 8px 6px;
	}
`;