import './SeekingProcess.css';
import { Heading } from '../Typography/Typography';

export const SeekingProcess = ({ seekingProcessInfo }) => {
  return (
    <div className="seeking-process-section">
        <Heading level={1} className="title">{seekingProcessInfo.title}</Heading>
        <div className="process">
            <img loading="lazy" className="banner" src={require("../../assets" + seekingProcessInfo.banner)} alt={seekingProcessInfo.title} />
            <div className="rounds-container">
                <div className="rounds-bar">
                    {
                        seekingProcessInfo.rounds.map((round, index, rounds) => {
                            return (
                                <div id={index === rounds.length - 1 ? "last-bar" : ""} className="round-bar" key={"round-bar-" + index}>
                                    <div className="circle">{index + 1}</div>
                                    {
                                        index === rounds.length - 1 ? (<></>) : 
                                        (<div className="vertical"></div>)
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="rounds">
                    {
                        seekingProcessInfo.rounds.map((round) => {
                            return (
                                <div className="round-card" key={round.id}>
                                    <Heading level={3} className="name">{round.name}</Heading>
                                    <p className="detail">{round.detail}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>    
    </div>
  )
}
