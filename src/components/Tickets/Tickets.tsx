import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { usedTypedSelector } from '../hooks/usedTypedSelector';
import image from '../../utils/dddb6e70e25fdd6553238ce7aecfa37661376fbb.png';
import './Tickets.scss';
import { getTickets } from '../functions/getTickets';
import { onHandleModal } from '../functions/onHandleModal';
import { Props } from '../../types/modalTypes';

const Tickets:React.FC<Props> = ({isActive, setActive} : Props) => {

 

    const isActiveArr = usedTypedSelector(state => state.modalHandleReducer.tickets.filter(ticket => ticket.isActive));
    // console.log(isActiveArr)
    const tickets = usedTypedSelector(state => state.modalHandleReducer.tickets);
    const [obj] = isActiveArr;
    // console.log(obj)
    // const {isActive, price} = obj;
    // console.log(isActive);
    const currentname = usedTypedSelector(state => state.modalHandleReducer.currentname);
    useEffect(() =>{
        dispatch(getTickets())
    },[])
    const dispatch = useDispatch();
    // const {tickets} = usedTypedSelector(state => state.ticketsReducer);
    const {currency} = usedTypedSelector(state => state.currencyReducer)
    const stopsData = usedTypedSelector(state => state.stopsReducer.stops)
    const ticketsData = usedTypedSelector(state => {
        const tickets = state.ticketsReducer.tickets
        // console.log(tickets)
        // console.log(stopsData
        //     .filter(item => item.checked))
        if (stopsData.every(item => item.checked) || stopsData.every(item => !item.checked)){
            return tickets
        }
            return tickets.filter(ticket => stopsData
                .filter(item => item.checked) 
                .map(item => item.quantity) 
                .includes(ticket.stops)) 

    })

    // console.log(tickets)

    

    const validData = currency.length > 0 ? currency : 'USD';
    return (
        <div>
                    {ticketsData.map((ticket, inx) => {
                        return(<div className="card-wrapper onblur" key={inx} >
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className='positioned'>
                                                <div className="view-buy">
                                                    <img src={image} alt="" />
                                                    <button className="btn btn-orange" value={ticket.price}
                                                        onClick={() => setActive(true)}
                                                    >Купить <br />за   {new Intl.NumberFormat('fr-FR', {
                                                        style: 'currency',
                                                        currency:validData,
                                                        currencyDisplay: 'narrowSymbol'
                                                        }).format(ticket.price).replace(/^(\D+)/, '$1 ')}
                                                    </button>
                                                </div>
                                                <div className="view-info">
                                                <div className="departure">
                                                    <p className="departure_time">{ticket.departure_time}</p>
                                                    <p>{ticket.origin}, {ticket.origin_name}</p>
                                                    <p>{ticket.arrival_date}</p>
                                                    <p> {ticket.stops}</p>
                                                </div>
                                                <div className="arrival">
                                                    <p className="arrival_time">{ticket.arrival_time}</p>
                                                    <p className="arrival_time">{ticket.destination}, {ticket.destination_name}</p>
                                                    <p className="arrival_time">{ticket.arrival_date}</p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                 </div>
                            </div>)
                            
                    })}
                  
            </div>
    )
}


export default Tickets;