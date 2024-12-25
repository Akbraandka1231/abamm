import moment from 'moment/moment';

const index = (time) => {
    const times = moment(time).format(' HH:mm:ss')
    // const times = time
    return {times}
}

export default index