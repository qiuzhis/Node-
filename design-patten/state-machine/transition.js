const StateMachine = require('javascript-state-machine');
const visualize = require('javascript-state-machine/lib/visualize');



const fsm = new StateMachine({
    init: 'A',
    transitions: [
        // {name: 'melt', from: 'solid', to: 'liquid'},
        // {name: 'freeze', from: 'liquid', to: 'solid'},
        // {name: 'vaporize', from: 'liquid', to: 'gas'},
        // {name: 'condense', from: 'gas', to: 'liquid'},
        {name: 'step', from: 'A', to: 'B'},
        {name: 'step', from: 'B', to: 'C'},
        {name: 'step', from: 'C', to: 'D'},
        {name: 'reset', from: ['B', 'C', 'D'], to: 'A'}
    ],
    methods: {
        // onMelt: function () {
        //     console.log('I melted')
        //     console.log(fsm.state)
        // },
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
        step:()=>{
            console.log('step')
        }
    }
});
//
// console.log(fsm.state)
// console.log(fsm.step())
// console.log(fsm.state)
// console.log(fsm.step())
// console.log(fsm.state)

console.log(visualize(fsm))
