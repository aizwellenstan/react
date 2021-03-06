import React from 'React';
import { Icon, Input, AutoComplete } from 'antd';

const { Option, OptGroup } = AutoComplete;

const dataSource = [];

function renderTitle(title) {
    return(
        <span>
            {title}
            <a
                style={{ float: 'right'}}
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >
                more
            </a>
        </span>
    );
}

const options = dataSource
    .map(group => (
        <OptGroup key={group.title} label={renderTitle(group.title)}>
            {group.children.map(opt => (
                <Option key={opt.title} value={opt.title}>
                    {opt.title}
                    <span className="certain-search-item-count">{opt.count} people</span>
                </Option>
            ))}
        </OptGroup>
    ))
    .concat([
        <Option disabled key="all" className="show-all">
            <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
                View all results
            </a>
        </Option>
    ]);

const Search = () => {
    return (
        <div className="certain-category-search-wrapper" style={{ width: 250 }}>
            <AutoComplete
                className="certain-category-search"
                dropdownClassName="certain-category-saech-dropdown"
                dropdownMatchSelectWidth={false}
                dropdownStyle={{ width:300 }}
                size="large"
                style={{ width: '100%' }}
                dataSource={options}
                placeholder="input here"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        </div>
    );
}

export default Search;
