import React, {useState} from "react";
import styled from "styled-components";
import IsoTopeGrid from "react-isotope";
import RecentWorkBg_1 from '../../assets/image/recent-works/recent_work_bg_1.jpg';

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-top: 120px;
`;

const Filter = styled("button")`
  background-color: green;
  border: none;
  outline: none;

  > input {
    width: 0;
    height: 0;

    &:checked {
      & + label {
        color: blue;
        border-color: blue;
      }
    }
  }

  > label {
    padding: 5px;
    border-bottom: 2px solid transparent;

    &:hover {
      color: blue;
      cursor: pointer;
    }
  }
`;

const Card = styled("div")`


  &.test, &.test1 {
    .recent_work_box {
    width: 25%;
    float: left;
}

.recent_work_box {
    position: relative;
}

.recent_work_box::after {
    content: '';
    position: absolute;
    background-color: rgba(231, 76, 60, .8);
    top: 0;
    left: 90%;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-transition: .3s;
    -o-transition: .3s;
    -moz-transition: .3s;
    transition: .3s;
}

.recent_work_box:hover:after {
    opacity: 1;
    left: 0%;
}

.recent_work_box:hover .recent_workd_sample_text {
    opacity: 1;
    bottom: 3.125rem;
    left: 2.8125rem;
}
  }


`;

const cardsDefault = [
    {
        id: "a",
        filter: ["test", "chart"]
    },
    {
        id: "b",
        filter: ["test1", "tile"]
    },
    {
        id: "c",
        filter: ["test", "chart"]
    },
    {
        id: "d",
        filter: ["test1", "tile"]
    },
    {
        id: "e",
        filter: ["test", "tile"]
    },
    {
        id: "f",
        filter: ["test1", "chart"]
    },
    {
        id: "h",
        filter: ["test1", "chart"]
    }
];

const filtersDefault = [
    {label: "all", isChecked: true},
    {label: "test", isChecked: false},
    {label: "test1", isChecked: false},
    {label: "chart", isChecked: false},
    {label: "tile", isChecked: false}
];

export default function App() {
    const [filters, updateFilters] = useState(filtersDefault);

    const onFilter = event => {
        const {
            target: {value, checked}
        } = event;

        updateFilters(state =>
            state.map(f => {
                if (f.label === value) {
                    return {
                        ...f,
                        isChecked: checked
                    };
                }

                return f;
            })
        );
    };

    return (
        <div className="App">
            <div>
                {filters.map(f => (
                    <Filter key={`${f.label}_key`}>
                        <input
                            id={f.label}
                            type="checkbox"
                            value={f.label}
                            onChange={onFilter}
                            checked={f.isChecked}
                        />
                        <label htmlFor={f.label}>{f.label}</label>
                    </Filter>
                ))}
            </div>

            <Container>
                <IsoTopeGrid
                    gridLayout={cardsDefault}
                    noOfCols={4}
                    unitWidth={300}
                    unitHeight={450}
                    filters={filters}
                >
                    {cardsDefault.map(card => (
                        <Card key={card.id}
                              className={`card ${card.filter[0]}`}>
                            <div className="tags">
                                {card.filter.map(c => (
                                    <span>
                                        {c}
                                        <div className="iso_recent_work">
        <div className="recent_works">
          <div className="recent_work_box animation video web_design">
            <a href="#">
              <div className="recent_work_sample recent_work_bg_1">
                <img src="images/recent-works/recent_work_bg_1.jpg" height={480} alt="Recent Work" />
              </div>
              <div className="recent_workd_sample_text">
                <h4>Web DESIGN</h4>
                <p>design / development</p>
              </div>
            </a>
          </div>{/* recent_work_box / */}
            <div className="recent_work_box web_design">
            <a href="#">
              <div className="recent_work_sample recent_work_bg_2">
                <img src="images/recent-works/recent_work_bg_2.jpg" height={480} alt="Recent Work" />
              </div>
              <div className="recent_workd_sample_text">
                <h4>Web DESIGN</h4>
                <p>design / development</p>
              </div>
            </a>
          </div>{/* recent_work_box / */}
            <div className="recent_work_box  print art web_design">
            <a href="#">
              <div className="recent_work_sample recent_work_bg_3">
                <img src="images/recent-works/recent_work_bg_3.jpg" height={480} alt="Recent Work" />
              </div>
              <div className="recent_workd_sample_text">
                <h4>Web DESIGN</h4>
                <p>design / development</p>
              </div>
            </a>
          </div>{/* recent_work_box / */}
            <div className="recent_work_box photography">
            <a href="#">
              <div className="recent_work_sample recent_work_bg_4">
                <img src="images/recent-works/recent_work_bg_4.jpg" height={480} alt="Recent Work" />
              </div>
              <div className="recent_workd_sample_text">
                <h4>photography</h4>
                <p>art / photography</p>
              </div>
            </a>
          </div>{/* recent_work_box / */}
            <div className="recent_work_box animation art">
            <a href="#">
              <div className="recent_work_sample recent_work_bg_5">
                <img src="images/recent-works/recent_work_bg_5.jpg" height={480} alt="Recent Work" />
              </div>
              <div className="recent_workd_sample_text">
                <h4>animation</h4>
                <p>art / animation</p>
              </div>
            </a>
          </div>{/* recent_work_box / */}
            <div className="recent_work_box  photography">
            <a href="#">
              <div className="recent_work_sample recent_work_bg_6">
                <img src="images/recent-works/recent_work_bg_6.jpg" height={480} alt="Recent Work" />
              </div>
              <div className="recent_workd_sample_text">
                <h4>photography</h4>
                <p>art / photography</p>
              </div>
            </a>
          </div>{/* recent_work_box / */}
            <div className="recent_work_box photography">
            <a href="#">
              <div className="recent_work_sample recent_work_bg_7">
                <img src="images/recent-works/recent_work_bg_7.jpg" height={480} alt="Recent Work" />
              </div>
              <div className="recent_workd_sample_text">
                <h4>photography</h4>
                <p>art / photography</p>
              </div>
            </a>
          </div>{/* recent_work_box / */}
            <div className="recent_work_box print art">
            <a href="#">
              <div className="recent_work_sample recent_work_bg_8">
                <img src="images/recent-works/recent_work_bg_8.jpg" height={480} alt="Recent Work" />
              </div>
              <div className="recent_workd_sample_text">
                <h4>T-SHIRT DESIGN</h4>
                <p>art / t-shirt</p>
              </div>
            </a>
          </div>{/* recent_work_box / */}
        </div>{/* recent_works / */}
      </div>{/* iso_recent_work / */}
                                    </span>
                                ))}
                            </div>
                            {card.id}
                        </Card>
                    ))}
                </IsoTopeGrid>
            </Container>
        </div>
    );
}
