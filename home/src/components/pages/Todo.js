import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Todo = () => {
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
		height:40px;
		font-size:16px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap
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

	const [TodoData, setTodoData] = useState([
		{
			id: 0,
			todo: '수정 버튼 클릭 시 input으로 변경'
		},
		{
			id: 1,
			todo: '추가하기 버튼 활성화될 때 리렌더링 되는 문제 확인'
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
		}else{
			alert('내용을 입력해주세요.');
			dataInput.current.focus();
		}
	};

	//할 일 삭제
	const deleteData = idx => {
		setTodoData(
			TodoData.filter(todos => todos.id !== idx)
		);
	};

	//할 일 수정
	const [isEdit, setIsEdit] = useState(false);
	const editData = idx => {
		setIsEdit(true);
	};

	const [isActive, setIsActive] = useState(true);

	const toggleBtn = (e) => {
		// console.log(e.target.value);
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
							<TodoText>
								{isEdit ? <TodoInput type="text" placeholder="+ 할 일 추가" value={val.todo} /> : val.todo}
							</TodoText>
							<EditBtn onClick={() => editData(idx)}>수정</EditBtn>
							<DeleteBtn onClick={() => deleteData(val.id)}>삭제</DeleteBtn>
						</TodoItem>
					))
				}
				<TodoItem>
					<TodoText>
						<TodoInput type="text" placeholder="+ 할 일 추가" ref={dataInput} onChange={(e) => toggleBtn(e)} />
					</TodoText>
					<AddBtn className={isActive ? 'btn_on' : 'btn_off'} onClick={() => addData(dataInput.current.value)}>추가</AddBtn>
				</TodoItem>
			</TodoList>
		</TodoWrap>
	);
};

export default Todo;