import { Button } from "@progress/kendo-react-buttons";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import {
  Field,
  FieldWrapper,
  Form,
  FormElement,
} from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";

export const TabStripForm: React.FC<{ keepTabsMounted: boolean }> = ({
  keepTabsMounted,
}) => {
  return (
    <TabStrip animation={false} selected={0} keepTabsMounted={keepTabsMounted}>
      <TabStripTab title="Test tab">
        <Form
          render={() => (
            <FormElement>
              <fieldset className={"k-form-fieldset"}>
                <legend className={"k-form-legend"}>
                  Please fill in the fields:
                </legend>
                <FieldWrapper>
                  <div className="k-form-field-wrap">
                    <Field
                      name={"firstName"}
                      component={Input}
                      labelClassName={"k-form-label"}
                      label={"First name"}
                    />
                  </div>
                </FieldWrapper>

                <FieldWrapper>
                  <div className="k-form-field-wrap">
                    <Field
                      name={"lastName"}
                      component={Input}
                      labelClassName={"k-form-label"}
                      label={"Last name"}
                    />
                  </div>
                </FieldWrapper>
                <FieldWrapper>
                  <Field
                    name="test"
                    component={ComboBox}
                    data={[{ id: "test-id", name: "test-desc" }]}
                    dataItemKey="id"
                    textField="name"
                    placeholder="Test placeholder"
                  />
                </FieldWrapper>
              </fieldset>

              <div className="k-form-buttons">
                <Button
                  type="submit"
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                >
                  Submit
                </Button>
              </div>
            </FormElement>
          )}
        />
      </TabStripTab>
    </TabStrip>
  );
};
