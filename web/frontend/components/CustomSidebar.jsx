import React from "react";
import "../assets/styles.css";
import { useNavigate } from "@shopify/app-bridge-react";
import { Link, Icon } from "@shopify/polaris";
import {
  HomeMajor,
  MarketingMajor,
  CashDollarMajor,
  ComposeMajor,
  ProductCostMajor,
  TaxMajor,
  PinMajor,
  InventoryMajor,
  ShipmentMajor,
  TitleMinor,
  SandboxMajor,
  ExistingInventoryMajor,
  NoteMajor,
  BankMajor,
} from "@shopify/polaris-icons";

const CustomSidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <Icon source={HomeMajor} color="subdued" />
        </div>
        <div className="sidebar-content">
          <ul className="list">
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={MarketingMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Product SEO
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={CashDollarMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Price
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={ComposeMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Compared
                  </Link>
                </span>
              </div>
            </li>

            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={ProductCostMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Cost
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={TaxMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Tax
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={PinMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    SKU & Barcode
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={InventoryMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Inventory
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={ShipmentMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Shipping
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={TitleMinor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Title
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={SandboxMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Description
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={ExistingInventoryMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Product Type
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={NoteMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Tag
                  </Link>
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="pedro">
                {" "}
                <Icon source={BankMajor} color="subdued" />
                <span className="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuyen-na-training-store.myshopify.com/admin/apps/example-app-386/pagename"
                      );
                    }}
                  >
                    Vendor
                  </Link>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomSidebar;
