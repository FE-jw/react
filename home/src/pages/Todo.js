import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const TodoWrap = styled.div`
	width:100%;
	max-width:500px;
	margin:0 auto;
	padding:10px;
	border-radius:4px;
	background-color:#fff;
	box-sizing:border-box;
`;

const TodoTit = styled.h2`
	font-size:30px;
	color:#000;
	text-align:center;
`;

const TodoList = styled.ul`
	margin-top:20px;
`;

const TodoItem = styled.li`
	display:flex;
	justify-content:space-between;
	align-items:center;
	padding:3px 0;
	font-size:16px;
	color:#000;

	& ~ &	{
		border-top:1px solid #999;
	}
`;

const TodoText = styled.div`
	display:flex;
	flex:1;
	align-items:center;
	min-height:40px;
	font-size:16px;
`;

const TodoInput = styled.input`
	display:block;
	width:100%;
	height:40px;
	border:0;
	font-family:inherit;
	font-size:16px;
	color:#000;
	box-sizing:border-box;
	
	&::placeholder	{
		color:#ccc;
	}
`;

const EditBtn = styled.button`
	margin-left:6px;
	padding:4px 8px;
	border-radius:4px;
	font-size:14px;
	font-weight:bold;
	color:#fff;
	background-color:royalblue;
`;

const DeleteBtn = styled.button`
	margin-left:6px;
	padding:4px 8px;
	border-radius:4px;
	font-size:14px;
	font-weight:bold;
	color:#fff;
	background-color:#d33;
`;

const AddBtn = styled.button`
	margin-left:6px;
	padding:4px 8px;
	border-radius:4px;
	font-size:14px;
	font-weight:bold;
	color:#fff;

	&.btn_off	{
		background-color:#ccc;
	}

	&.btn_on	{
		background-color:mediumseagreen;
	}
`;


const Todo = () => {
	const [TodoData, setTodoData] = useState([
		{
			id: 0,
			todo: '수정 기능 추가'
		},
		{
			id: 1,
			todo: '할 일 2'
		}
	]);

	//추가할 텍스트 선택
	const dataInput = useRef();

	//할 일 추가
	const addData = val => {
		if(val.trim() !== ''){
			setTodoData([
				...TodoData,
				{
					id: TodoData.length,
					todo: val
				}
			]);
			dataInput.current.value = '';
			setIsActive(false);
		}else{
			alert('내용을 입력해주세요.');
			dataInput.current.focus();
		}
	};

	//할 일 수정
	const EditData = (e) => {
		console.log(e.target.outerText);
	};

	//할 일 삭제
	const deleteData = idx => {
		setTodoData(
			TodoData.filter(todos => todos.id !== idx)
		);
	};

	const [isActive, setIsActive] = useState(false);

	const toggleBtn = (e) => {
		if(e.target.value.trim() === ''){
			setIsActive(false);
		}else{
			setIsActive(true);
		}
	};

	return (
		<TodoWrap>
			<TodoTit>To Do List</TodoTit>
			<TodoList>
				{
					TodoData.map((val, idx) => (
						<TodoItem key={idx}>
							<TodoText contentEditable={true} suppressContentEditableWarning={true} onKeyUp={(e) => EditData(e)}>
								{val.todo}
							</TodoText>
							<DeleteBtn type="button" onClick={() => deleteData(val.id)}>삭제</DeleteBtn>
						</TodoItem>
					))
				}
				<TodoItem>
					<TodoText>
						<TodoInput type="text" placeholder="+ 할 일 추가" ref={dataInput} onChange={(e) => toggleBtn(e)} />
					</TodoText>
					<AddBtn type="button" className={isActive ? 'btn_on' : 'btn_off'} onClick={() => addData(dataInput.current.value)}>추가</AddBtn>
				</TodoItem>
			</TodoList>
		</TodoWrap>
	);
};

export default Todo;