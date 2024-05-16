import Card from "@/components/Card/Card";
import "./list.scss";

export default function details (){
    interface CardData {
        id: number;
        type: string;
        title: string;
        description: string;
        nickname: string;
        bookmark: number;
        view: number;
        play: number;
    }


    let cardInfo:CardData[] = [
        {
            id:0,
            type: '툴',
            title:'여보 이거 사도 돼?',
            description:'사고 싶은 물건을 사기 전에 허락을 받아야 하는 사람들을 위한 툴',
            nickname:'친절한 코알라12345',
            bookmark: 10.1,
            view: 539,
            play: 6.1
        },
        {
            id:1,
            type: '툴',
            title:'나의 재무 상담가',
            description:'사고 싶은 물건을 사기 전에 허락을 받아야 하는 사람들을 위한 툴',
            nickname:'친절한 코알라12345',
            bookmark: 10.1,
            view: 539,
            play: 6.1
        },
        {
            id:2,
            type: '툴',
            title:'나의 재무 상담가',
            description:'사고 싶은 물건을 사기 전에 허락을 받아야 하는 사람들을 위한 툴',
            nickname:'친절한 코알라12345',
            bookmark: 10.1,
            view: 539,
            play: 6.1
        },
        {
            id:3,
            type: '툴',
            title:'나의 재무 상담가',
            description:'사고 싶은 물건을 사기 전에 허락을 받아야 하는 사람들을 위한 툴',
            nickname:'친절한 코알라12345',
            bookmark: 10.1,
            view: 539,
            play: 6.1
        },
        {
            id:4,
            type: '툴',
            title:'나의 재무 상담가',
            description:'사고 싶은 물건을 사기 전에 허락을 받아야 하는 사람들을 위한 툴',
            nickname:'친절한 코알라12345',
            bookmark: 10.1,
            view: 539,
            play: 6.1
        },
        {
            id:5,
            type: '툴',
            title:'나의 재무 상담가',
            description:'사고 싶은 물건을 사기 전에 허락을 받아야 하는 사람들을 위한 툴',
            nickname:'친절한 코알라12345',
            bookmark: 10.1,
            view: 539,
            play: 6.1
        },
        {
            id: 6,
            type: '툴',
            title:'나의 재무 상담가',
            description:'사고 싶은 물건을 사기 전에 허락을 받아야 하는 사람들을 위한 툴',
            nickname:'친절한 코알라12345',
            bookmark: 10.1,
            view: 539,
            play: 6.1
        },
        {
            id:7,
            type: '툴',
            title:'나의 재무 상담가',
            description:'사고 싶은 물건을 사기 전에 허락을 받아야 하는 사람들을 위한 툴',
            nickname:'친절한 코알라12345',
            bookmark: 10.1,
            view: 539,
            play: 6.1
        },
        {
            id: 8,
            type: '툴',
            title:'나의 재무 상담가',
            description:'사고 싶은 물건을 사기 전에 허락을 받아야 하는 사람들을 위한 툴',
            nickname:'친절한 코알라12345',
            bookmark: 10.1,
            view: 539,
            play: 6.1
        }
    ]

    return (
        <div className="listPage">
            <div className="main">
                <div className="top">
                    <div className="tabBox">
                        <div className="tapList">
                            <button className="tapItem">툴</button>
                            <button className="tapItem">챗봇</button>
                        </div>
                        <div>
                            <input type="text"></input>
                        </div>
                    </div>
                    
                    <div className="categoryWrap">
                        <ul className="category">
                            <li className="item active">전체</li>
                            <li className="item">범용/일반</li>
                            <li className="item">사랑</li>
                            <li className="item">마케팅</li>
                        </ul>
                    </div>
                </div>
            
                <div className="cardWrap">
                    <div className="cardBox">
                        {
                            cardInfo?.map((item,index)=>(
                                <Card {...item} key={index}></Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
