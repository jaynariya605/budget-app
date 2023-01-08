import moment from 'moment'

export default  [{
    id:'1',
    description: 'Gum',
    amount:195,
    createdAt: 0,
    note: 'There is gum'
}, {
    id:'2',
    description: 'rent',
    amount:1095,
    createdAt: moment(0).subtract(4,'days').valueOf(),
    note:'There is rent'

},{
    id:'3',
    description: 'CC',
    amount:4500,
    createdAt: moment(0).add(4,'days').valueOf(),
    note:'There is cc'

}]