import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0;

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        };
        this.submitTodo = this.submitTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.setType = this.setType.bind(this);
    }

    inputChange(inputValue) { this.setState({ inputValue }); }

    submitTodo() {
        if (this.state.inputValue.match(/^\s*$/)) return;
        const todo = { title: this.state.inputValue, todoIndex, complete: false };
        todoIndex++;
        this.setState({ todos: [...this.state.todos, todo], inputValue: '' }, () => {
            console.log('State: ', this.state);
        });
    }

    deleteTodo(todoIndex) {
        const { todos } = this.state;
        this.setState({ todos: todos.filter((t) => t.todoIndex !== todoIndex) });
    }

    toggleComplete(todoIndex) {
        let { todos } = this.state;
        todos.forEach((t) => { if (t.todoIndex === todoIndex) t.complete = !t.complete; });
        this.setState({ todos });
    }

    setType(type) { this.setState({ type }); }

    render() {
        const { inputValue, todos, type } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Heading />
                    <Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)} />
                    <TodoList 
                        type={type}
                        toggleComplete={this.toggleComplete}
                        deleteTodo={this.deleteTodo}
                        todos={todos} />
                    <Button submitTodo={this.submitTodo} />
                </ScrollView>
                <TabBar type={type} setType={this.setType} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    content: { flex: 1, paddingTop: 60 }
});

export default App;