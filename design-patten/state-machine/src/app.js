require('./mongodb')
const StateMachine = require('javascript-state-machine');
const mongoose = require("mongoose");
const _ = require("lodash");

const Transition = mongoose.model('Transition')


async function onMelt(){
    console.log('I melted')
}


const init = async () => {
    const transitions = await Transition.find();

    console.log(transitions.map(value => _.pick(value, ['name', 'from', 'to'])));
    const fsm = new StateMachine({
        init: 'solid',
        transitions: transitions.map(value => _.pick(value, ['name', 'from', 'to'])),
        methods: {
            onMelt,
            // onFreeze: function () {
            //     console.log('I froze')
            // },
            // onVaporize: function () {
            //     console.log('I vaporized')
            // },
            // onCondense: function () {
            //     console.log('I condensed')
            // },
            // onInvalidTransition: function (transition, from, to) {
            //     console.log()
            //
            // },
        }
    });

    console.log(await fsm.onMelt())

    console.log(fsm.state)
}

init()




