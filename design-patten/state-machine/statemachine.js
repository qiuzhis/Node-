const StateMachine = require('javascript-state-machine');


const fsm = new StateMachine({
    init: 'solid',
    transitions: [
        {name: 'melt', from: 'solid', to: 'liquid'},
        {name: 'freeze', from: 'liquid', to: 'solid'},
        {name: 'vaporize', from: 'liquid', to: 'gas'},
        {name: 'condense', from: 'gas', to: 'liquid'}
    ],
    methods: {
        onMelt: function () {
            console.log('I melted')
            console.log(fsm.state)
        },
        onFreeze: function () {
            console.log('I froze')
        },
        onVaporize: function () {
            console.log('I vaporized')
        },
        onCondense: function () {
            console.log('I condensed')
        },
        onInvalidTransition: function (transition, from, to) {
            console.log()

        }
    }
});

console.log(fsm.state)
console.log(fsm.melt())
console.log(fsm.melt())
