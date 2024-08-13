import React from "react";
import { photo2 } from "../../assets/images";
import { Layout, Menu, Card } from "antd";
import FooterPage from "../../components/Footer/Footer";
const { Header, Content, Sider } = Layout;


function Bio() {
  const biography = {
    name: "Professor Asrat",
    position: "President, XYZ University, Country",
    image: {photo2},
    details: [
      "Professor Asrat assumed the position of interim president of XYZ University on August 31, 2023.",
      "Prior to becoming the president of XYZ University, Professor Asrat spent about five years in State Ministerial position for Higher Education and Development. The president was among the most significant figures in leading XYZ higher learning institutions in the course of policy, curricular, organizational and management reform processes. By default, Professor Asrat was among the key personalities in the assessment and recommendations of XYZ to be the first authorized public university in the country.",
      "Professor Asrat was also in higher education management position as State Minister for Science and Higher Education between November 2018 and September 2021. The times are during the early years of the political reform in the country that demanded rethinking and examining the education roadmap of the nation and crafting the future of higher educational institutions with respect to educational philosophy, policy, structure, pedagogy, organization and management of the country. He demonstrated higher level of leadership qualities, analytical skills and transformational competency in managing the desired national educational reform.",
      "The president spent most of his professional career in higher education leadership responsibilities. More specifically, he played worth mentioning roles during transformations, expansions, access and quality endeavors in higher education. For instance, Professor Asrat took up his role as General Manager of Higher Education Expansion Program (MoE) between July 2015 and October 2016."
    ]
  };

  return (
    <Layout className="min-h-screen">
      <Header className="bg-blue-600 text-white">
        <div className="text-2xl">Biography</div>
      </Header>
      <Layout>
        <Sider width={100} className="bg-gray-100">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            className="h-full"
          >
            <Menu.Item key="1">Quick Links</Menu.Item>
            <Menu.Item key="2">Systems</Menu.Item>
            <Menu.Item key="3">Upcoming Events</Menu.Item>
            <Menu.Item key="4">Downloads</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "24px" }}>
          <Content
            className="bg-white p-6 rounded-lg shadow-md"
            style={{ margin: 0, minHeight: 280 }}
          >
            <div className="flex">
              <Card
                cover={<img alt={biography.name} src={biography.image} />}
                className="max-w-xs mr-6"
              />
              <div>
                <h1 className="text-3xl font-bold mb-4">{biography.name}, {biography.position}</h1>
                {biography.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
      <FooterPage/>      
    </Layout>
  );
}

export default Bio;
