import React from 'react'
import { Line } from 'react-chartjs-2'
import useCoinChart from '../hooks/useCoinChart'

export default function Coin( { coin } ) 
{
    const { chartData, chartOptions, chartHeight, chartWidth } = useCoinChart( coin )
    
    const lastSales    = coin.last_sales ?? []
    const coinMaxPrice = Math.max( ...lastSales )
    const coinMinPrice = Math.min( ...lastSales ) 
      
    return (
        <tr className="coin-row" key={coin.name}>
            
            <td className="coin-logo"><img src={coin.logo}/></td>
            <td className="coin-name">
                <h4>{coin.name}</h4>
                <h4 className="short-name">({coin.short_name})</h4>
            </td>
            <td className="coin-price">{coin.price ?? 'N/A'}</td>
            <td className="coin-max">{ coinMaxPrice !== -Infinity  ? coinMaxPrice : 'N/A' }</td>
            <td className="coin-min">{ coinMinPrice !== Infinity  ? coinMinPrice : 'N/A' }</td>
            <Line width={chartWidth} height={chartHeight} data={chartData} className="chart" options={chartOptions}/>
            
        </tr>   
    ) 
}
