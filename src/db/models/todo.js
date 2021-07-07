import mongoose from 'mongoose';


export const TodoSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        status: {
            type: String,
            enum:  ['INCOMPLETED', 'COMPLETED'],
            default: 'INCOMPLETED'
        },
    },
    { timestamps: true }
);

export const TodoModel = mongoose.model('Todo', TodoSchema);