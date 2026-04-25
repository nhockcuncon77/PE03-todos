import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All': return todos;
            case 'Active': return todos.filter((t) => !t.complete);
            case 'Complete': return todos.filter((t) => t.complete);
        }
    };

    todos = getVisibleTodos(todos, type);
    
    return (
        <View>
            {todos.map((todo) => (
                <Todo
                    key={todo.todoIndex}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete} />
            ))}
        </View>
    );
};

export default TodoList;