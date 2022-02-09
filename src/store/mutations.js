// import { createLogger } from "vuex";

export default {
    LOADING(state, status){
        state.isLoaded = status;
    },

    SORT_LIST_TODO(state,selected){
        if(selected === "Default"){
            state.todos = state.currentTodos
            return state.todos.sort(
                (a,b) =>new Date(a.date) - new Date(b.date)
            )
        }
        else if (selected === "A - Z"){
            state.todos = state.currentTodos
            // return state.todos.sort((a, b) => {
            //     if (a.task.toLowerCase() < b.task.toLowerCase()) {
            //         return -1;
            //     } else if (a.task.toLowerCase() > b.task.toLowerCase()) {
            //         return 1;
            //     } else return 0;
            // });
            return state.todos.sort((a,b) => a.task.toLowerCase().localeCompare(b.task.toLowerCase()))
        }
        else if (selected === "Z - A") {
            state.todos = state.currentTodos 
            return state.todos.sort((a,b) => b.task.toLowerCase().localeCompare(a.task.toLowerCase()))
            // return state.todos.sort((a, b) => {
            //     if (a.task.toLowerCase() < b.task.toLowerCase()) {
            //         return 1;
            //     } else if (a.task.toLowerCase() > b.task.toLowerCase()) {
            //         return -1;
            //     } else return 0;
            // });
        }
        else if (selected === "Completed") {
            state.todos = state.currentTodos
            state.todos = state.todos.filter((task) => {
                return task.completed === true;
            });
            // return taskCompleted
            // console.log(taskCompleted)
            // return [...state.todos]
        } 
        else if (selected === "Unfinished") {
            state.todos = state.currentTodos
            state.todos = state.todos.filter((task) => {
                return task.completed === false;
            });
        }
    },

    // COMPLETED_TODO(state,id){
    //     state.todos.filter(todo => {
    //         if(todo.id === id){
    //             todo.completed = !todo.completed;
    //         }
    //     })
    // },
    DELETE_TODO(state, id){
        state.todos = state.todos.filter(todo => todo.id !== id);
        // return state.todos.splice(id, 1);
    },
    ADD_TODO(state, newTodo){
        state.todos.index(newTodo);
    },
    UPDATE_TODO(state, tasks){
        const taskUpdate = state.todos.find(item => item.id === tasks.id);
        // console.log({taskUpdate});
        taskUpdate.completed = tasks.completed
        // state.todos[tasks.id] = tasks;
        // console.log(state.todos)
    },

    GET_ID_TODO(state, id) {
        state.todos = [id];
    },
    GET_TODO(state, todos){
        state.todos = todos.sort(
            (a, b) => new Date(a.date) - new Date(b.date))
        state.currentTodos = todos.sort(
            (a, b) => new Date(a.date) - new Date(b.date))
            // console.log(state.todos)
    },
    FILTERED_TODO(state, search){
        state.todos = state.currentTodos
        state.todos = state.todos.filter(todo => {
            return todo.task.toLowerCase().includes(search.trim().toLowerCase())
        })
    },

    GET_USER(state, users){
        state.users = users;
    },
    ADD_USER(state, newUser){
        state.users.unshift(newUser);
    },    
    LOGOUT_USER(state){
        state.users = {}
        
    },
}