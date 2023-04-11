import {
  Button,
  ButtonGroup,
  Card,
  Layout,
  Page,
  Select,
  Stack,
} from "@shopify/polaris";
import CustomSidebar from "../components/CustomSidebar";
import { useState, useCallback } from "react";
export default function HomePage() {
  const [selected, setSelected] = useState("collections");
  const [selected2, setSelected2] = useState("is");
  const handleSelectedChange = useCallback((value) => setSelected(value), []);
  const handleSelectedChange2 = useCallback((value) => setSelected2(value), []);
  const options = [
    { Label: "Collections", value: "Collections" },
    { Label: "Collections", value: "Collections" },
    { Label: "Collections", value: "Collections" },
  ];
  const conditions = [
    { label: "is", value: "is" },
    { label: "is not", value: "is not" },
  ];

  return (
    <Page fullWidth>
      <Stack wrap={false}>
        <Stack.Item>
          <CustomSidebar />
        </Stack.Item>
        <Stack.Item fill>
          <Layout>
            <Layout.Section></Layout.Section>
            <Layout.Section>
              <h1 style={{ fontWeight: "bold" }}>
                Step 1: Select what product to edit
              </h1>
            </Layout.Section>
            <Layout.Section>
              <Card>
                <Layout.Section>
                  <Stack>
                    <Stack.Item></Stack.Item>
                    <Stack.Item>
                      <h2>Products must match all conditions</h2>
                    </Stack.Item>
                  </Stack>
                </Layout.Section>
                <Layout.Section>
                  <Stack>
                    <Stack.Item></Stack.Item>
                    <Stack.Item></Stack.Item>
                    <Stack.Item>
                      <Select
                        options={options}
                        onChange={handleSelectedChange}
                        value={selected}
                      />
                    </Stack.Item>
                    <Stack.Item>
                      <Select
                        options={conditions}
                        onChange={handleSelectedChange2}
                        value={selected2}
                      />
                    </Stack.Item>
                    <Stack.Item>
                      <Select />
                    </Stack.Item>
                  </Stack>
                  <Layout.Section>
                    <ButtonGroup>
                      <h1></h1>
                      <h1></h1>
                      <Button>Preview matched products</Button>
                      <Button primary>Add product filter condition</Button>
                    </ButtonGroup>
                  </Layout.Section>
                  <Layout.Section></Layout.Section>
                </Layout.Section>
              </Card>
            </Layout.Section>
            <Layout.Section>
              <hr />
            </Layout.Section>
            <Layout.Section>
              <h1>Step 2: Preview selected products</h1>
              <br />
            </Layout.Section>
            <Layout.Section>
              <Card>
                <Layout>
                  <Layout.Section>
                    <Stack distribution="fillEvenly">
                      <Stack.Item></Stack.Item>
                      <Stack.Item>Title</Stack.Item>
                      <Stack.Item>Variants</Stack.Item>
                      <Stack.Item>Tags</Stack.Item>
                    </Stack>
                  </Layout.Section>
                  <Layout.Section>
                    <hr />
                  </Layout.Section>
                  <Layout.Section>
                    <h1 style={{ fontWeight: "bold" }}>
                      Optonal step: select what variants to edit
                    </h1>
                    <br />
                  </Layout.Section>

                  <Layout.Section>
                    <Card>
                      <Layout>
                        <Layout.Section>
                          <Stack>
                            <Stack.Item></Stack.Item>
                            <Stack.Item>
                              Variants must match all following conditons:
                            </Stack.Item>
                          </Stack>
                        </Layout.Section>
                        <Layout.Section>
                          <Stack distribution="fill">
                            <Stack.Item>
                              <Select />
                            </Stack.Item>
                            <Stack.Item></Stack.Item>
                          </Stack>
                        </Layout.Section>
                        <Layout.Section>
                          <Stack distribution="fill">
                            <Stack.Item>
                              <Select />
                            </Stack.Item>
                            <Stack.Item></Stack.Item>
                          </Stack>
                        </Layout.Section>
                        <Layout.Section></Layout.Section>
                        <Layout.Section>
                          <hr />
                        </Layout.Section>
                      </Layout>
                    </Card>
                  </Layout.Section>
                  <Layout.Section></Layout.Section>
                  <Layout.Section>
                    <hr />
                  </Layout.Section>
                  <Layout.Section>
                    <h1 style={{ fontWeight: "bold" }}>
                      Step 3: Choose how to edit selected products
                    </h1>
                    <br />
                  </Layout.Section>
                  <Layout.Section>
                    <Card>
                      <Layout>
                        <Layout.Section>
                          <Stack>
                            <Stack.Item></Stack.Item>
                            <Stack.Item>
                              <h2>Choose an option</h2>
                            </Stack.Item>
                          </Stack>
                        </Layout.Section>
                        <Layout.Section>
                          <Stack>
                            <Stack.Item></Stack.Item>
                            <Stack.Item>
                              <Select />
                            </Stack.Item>
                            <Stack.Item>
                              <Select />
                            </Stack.Item>
                            <Stack.Item>
                              <Select />
                            </Stack.Item>
                          </Stack>
                        </Layout.Section>
                        <Layout.Section>
                          <ButtonGroup>
                            <h1></h1>
                            <h1></h1>
                            <Button>Schedule Bulk Edit</Button>
                            <Button primary>Start Bulk Edit Now</Button>
                          </ButtonGroup>
                        </Layout.Section>
                        <Layout.Section></Layout.Section>
                      </Layout>
                    </Card>
                  </Layout.Section>
                </Layout>
              </Card>
            </Layout.Section>
          </Layout>
        </Stack.Item>
      </Stack>
    </Page>
  );
}
