import React, { useState, useEffect, useRef } from 'react';
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

	&[placeholder]:empty:before {
		content: attr(placeholder);
		color: #aaa; 
	}
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
	border:1px solid #d33;
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

const DescUl = styled.ul`
	max-width:500px;
	margin:20px auto 0;
`;

const DescDl = styled.dl`
	max-width:500px;
	margin:20px auto 0;
	dt	{font-weight:bold;}
`;

const Todo = () => {
	const [TodoData, setTodoData] = useState([
		{
			id: 0,
			todo: '수정 시 줄바꿈 추가하면 <br>로 나오는 것 확인'
		},
		{
			id: 1,
			todo: '할 일 3'
		},
		{
			id: 2,
			todo: '할 일 4'
		}
	]);
	const [todoVal, setTodoVal] = useState('');

	//할 일 추가
	const addData = (e) => {
		//Enter 눌렀을 때
		if(e.key.toLowerCase() === 'enter'){
			if(todoVal !== ''){
				//성공

				let current_id;
				if(TodoData.length === 0){
					current_id = 0;
				}else{
					current_id = TodoData[TodoData.length - 1].id + 1;
				}

				setTodoData((prevState) => {
					return([
						...prevState,
						{
							id: current_id,
							todo: todoVal
						}
					]);
				});
				setTodoVal('');
				console.log(`할 일 [${todoVal}] 추가 완료`);
			}else{
				//실패
				alert('내용을 입력해주세요.');
				e.target.focus();
			}
		}
	};

	//TodoData 업데이트 될 때만 실행하기 위함(마운트 될 때는 실행 X)
	/*
	const mounted = useRef(false);
	useEffect(() => {
		if(!mounted.current){
			mounted.current = true;
		}else{

		}
	}, [TodoData]);
	*/

	//할 일 수정
	const editData = (e, val, val_id) => {
		console.log(e);

		//Enter만 눌렀을 때
		if(!e.shiftKey && e.key.toLowerCase() === 'enter'){
			setTodoData(
				TodoData.map(todos => todos.id === val_id
					? {...todos, todo: val}
					: todos
				)
			);

			e.target.blur();
			console.log(`할 일 [${e.target.innerText}] 수정 완료`);
		}
	};

	//할 일 삭제
	const deleteData = idx => {
		setTodoData(
			TodoData.filter(todos => todos.id !== idx)
		);
	};

	return (
		<>
			<TodoWrap>
				<TodoTit>To Do List</TodoTit>
				<TodoList>
					{
						TodoData.map((val, idx) => (
							<TodoItem key={idx}>
								<TodoText contentEditable={true} suppressContentEditableWarning={true} onKeyPress={(e) => editData(e, e.target.innerHTML, val.id)}>
									{val.todo}
								</TodoText>
								<DeleteBtn type="button" onClick={() => deleteData(val.id)}>-</DeleteBtn>
							</TodoItem>
						))
					}
					<TodoItem>
						<TodoText>
							<TodoInput placeholder="+할 일 추가" onKeyPress={(e) => addData(e)} onChange={(e) => setTodoVal(e.target.value)} value={todoVal} />
						</TodoText>
					</TodoItem>
				</TodoList>
			</TodoWrap>
			<DescDl>
				<dt>실시간 투두리스트 data(리스트 추가하면 동기화됨)</dt>
				{
					TodoData.map((value, idx) => {
						return <dd key={value.id}>{value.todo}</dd>
					})
				}
			</DescDl>
		</>
	);
};

export default Todo;