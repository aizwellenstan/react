import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { Table } from "antd";
import "antd/dist/antd.css";

import "./styles.css";

class ExampleTable extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { columns, dataSource, titleText, onExpand } = this.props;
    return (
      <Table
        title={() => titleText}
        bordered={true}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        expandIconColumnIndex={1}
        onExpand={onExpand}
      />
    );
  }
}
let rowSpanCount = [2, 2]; //マージされたカテゴリのデフォルト数
let expandedCache = {}; //展開状態と折りたたみ状態をキャッシュします

let columns = ["1-1", "1-2", "1-3"].map((item, index) => {
  return {
    title: item,
    dataIndex: "" + index
  };
});

let data = [
  {
    key: "s0", //キーに基づいて行マージの数を決定します
    type: "Type1",
    source: "Total",
    ...[100, 200, 300]
  },
  {
    key: "dept1type1",
    type: "Type1",
    source: "Dep1",
    ...[100, 200, 300],
    children: [
      {
        key: "expanddept1type1proxy", //キーに基づいて行マージの数を決定します
        type: "Type1", //タイプに従って展開と折りたたみを識別します。これは前のタイプと一致している必要があります
        source: "Vtuber",
        children: [
          {
            key: "expanddept1type1proxy1", //キーに基づいて行マージの数を決定します
            type: "Type1",
            source: "あくあ",
            ...[50, 100, 150]
          },
          {
            key: "expanddept1type1proxy2", //キーに基づいて行マージの数を決定します
            type: "Type1",
            source: "シオン",
            ...[50, 100, 150]
          }
        ]
      }
    ]
  },
  {
    key: "s2",
    type: "Type2",
    source: "Total",
    ...[100, 200, 300]
  },
  {
    key: "dept1type2",
    type: "Type2",
    source: "Dep1",
    ...[100, 200, 300],
    children: [
      {
        key: "expanddept1type2proxy", //キーに基づいて行マージの数を決定します
        type: "Type2", //タイプに応じて展開と折りたたみを識別する
        source: "Vtuber",
        children: [
          {
            key: "expanddept1type2proxy1", //キーに基づいて行マージの数を決定します
            type: "Type2",
            source: "あくあ",
            ...[50, 100, 150]
          },
          {
            key: "expanddept1type2proxy2", //キーに基づいて行マージの数を決定します
            type: "Type2",
            source: "シオン",
            ...[50, 100, 150]
          }
        ]
      }
    ]
  }
];

columns.unshift(
  {
    title: "Date",
    dataIndex: "type",
    colSpan: 2,
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {}
      };
      if (row.key === "s0") {
        obj.props.rowSpan = rowSpanCount[0];
      } else if (row.key === "s2") {
        obj.props.rowSpan = rowSpanCount[1];
      } else {
        obj.props.rowSpan = 0;
      }
      if (row.key.indexOf("expand") > -1) {
        obj.props.colSpan = 0;
      }
      return obj;
    }
  },
  {
    title: "",
    dataIndex: "source",
    colSpan: 0
  }
);

//展開された行と折りたたまれた行のマージの数を制御します
let handleExpand = (expanded, record) => {
  if (record.type === "Type1") {
    if (expanded) {
      rowSpanCount[0] += record.children.length; //展開する
      record.expanded = true;
      if (record.key.indexOf("proxy") > -1) {
        expandedCache[record.key] = true; //キャッシュ拡張ステータス
      }
      //ステップごとに展開されているかどうかを判断し、次のレベルが展開されているかどうかを確認し、展開されている場合は、下位レベルの要素をマージします
      if (
        expandedCache[`expand${record.key}proxy`] &&
        record.children[0].children
      ) {
        rowSpanCount[0] += record.children[0].children.length;
      }
    } else {
      rowSpanCount[0] -= record.children.length; //折りたたみます
      record.expanded = false;
      if (record.key.indexOf("proxy") > -1) {
        expandedCache[record.key] = false;
      }
      if (
        expandedCache["expand" + record.key + "proxy"] &&
        record.children[0].children
      ) {
        rowSpanCount[0] -= record.children[0].children.length;
      }
    }
    let domE = document.getElementsByTagName("tr");
    for (let i = 0; i < domE.length; i++) {
      let ele = domE[i].getAttribute("data-row-key");
      if (ele === "s0") {
        domE[i].firstChild.setAttribute("rowSpan", rowSpanCount[0]);
      }
    }
  } else if (record.type === "Type2") {
    if (expanded) {
      rowSpanCount[1] += record.children.length; //展開する
      record.expanded = true;
      if (record.key.indexOf("proxy") > -1) {
        expandedCache[record.key] = true; //キャッシュ拡張ステータス
      }
      //段階的に展開するかどうかを決定します
      if (
        expandedCache[`expand${record.key}proxy`] &&
        record.children[0].children
      ) {
        rowSpanCount[1] += record.children[0].children.length;
      }
    } else {
      rowSpanCount[1] -= record.children.length; //折りたたみます
      record.expanded = false;
      if (record.key.indexOf("proxy") > -1) {
        expandedCache[record.key] = false;
      }
      if (
        expandedCache["expand" + record.key + "proxy"] &&
        record.children[0].children
      ) {
        rowSpanCount[1] -= record.children[0].children.length;
      }
    }
    let domE = document.getElementsByTagName("tr");
    for (let i = 0; i < domE.length; i++) {
      let ele = domE[i].getAttribute("data-row-key");
      if (ele === "s2") {
        domE[i].firstChild.setAttribute("rowSpan", rowSpanCount[1]);
      }
    }
  }
};

function App() {
  return (
    <div>
      <ExampleTable
        columns={columns}
        dataSource={data}
        titleText={"DEMO"}
        onExpand={handleExpand}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
