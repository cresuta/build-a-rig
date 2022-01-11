import React, { useContext, useEffect, useState } from "react";
import "./PreviousRigBuild.css";
import Accordion from "react-bootstrap/Accordion";
import { Col } from "react-bootstrap";
import { Badge, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { PreviousRigBuildGraphicsCardContext } from "./PreviousRigBuildGraphicsCardProvider";
import { RigBuildContext } from "../rig_build/RigBuildProvider";
import { useNavigate, useParams } from "react-router-dom";

export const PreviousRigBuildCard = ({ rigBuild, gpuArray }) => {

  const {deleteRigBuildById} = useContext(RigBuildContext);
 
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRigBuildById(rigBuild.id)
    .then(() => {
      navigate("/previous-rig-builds")
    })
  }

  return (
    <>
      <Accordion.Item eventKey={rigBuild.id} className="accordion-item">
        <Accordion.Header className="accordion-header">
          <Col className="accordion-header__date">{rigBuild.date}</Col>
          <Col className="accordion-header__gpu-list">
            {gpuArray.map((gpu) => {
              return (
                <Button variant="dark" className="card-btn__previous">
                  {gpu.name}
                  <Badge
                    className="card-brand__previous"
                    bg={gpu.brand === "Nvidia" ? "success" : "danger"}
                  >
                    {gpu.brand}
                  </Badge>
                </Button>
              );
            })}
          </Col>
        </Accordion.Header>
        <Accordion.Body className="accordion-body">
          <Table striped bordered hover variant="dark" className="table-1">
            <thead>
              <tr>
                <th>Coin</th>
                <th>Hardware Cost</th>
                <th>Hashrate</th>
                <th>Power Consumption</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ethereum</td>
                <td>${rigBuild.hardwareCostTotal}</td>
                <td>{rigBuild.hashrateTotal} MH/s</td>
                <td>{rigBuild.powerConsumptionTotal} Watts</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover variant="dark" className="table-2">
            <thead>
              <tr>
                <th></th>
                <th>Day</th>
                <th>Week</th>
                <th>Month</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Revenue</th>
                <td>${rigBuild.dailyRevenue}</td>
                <td>${rigBuild.weeklyRevenue}</td>
                <td>${rigBuild.monthlyRevenue}</td>
                <td>${rigBuild.yearlyRevenue}</td>
              </tr>
              <tr>
                <th>Electricity</th>
                <td>${rigBuild.dailyElectricity}</td>
                <td>${rigBuild.weeklyElectricity}</td>
                <td>${rigBuild.monthlyElectricity}</td>
                <td>${rigBuild.yearlyElectricity}</td>
              </tr>
              <tr>
                <th>Profit</th>
                <td>${rigBuild.dailyProfit}</td>
                <td>${rigBuild.weeklyProfit}</td>
                <td>${rigBuild.monthlyProfit}</td>
                <td>${rigBuild.yearlyProfit}</td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={handleDelete} id="delete-rig">
            <span>
              Delete Rig<i class="bi bi-trash delete-rig-icon"></i>
            </span>
          </Button>
          {/* <Container className="accordion-container">
            <Col className="totals-container">
              <Row className="build-area-row">
                <h4>Hardware Cost</h4>
                <div className="hardware-cost">
                  ${rigBuild.hardwareCostTotal}
                </div>
                <h4>Hash rate</h4>
                <div className="hashrate">{rigBuild.hashrateTotal} MH/s</div>
                <h4>Power Consumption</h4>
                <div className="power-consumption">
                  {rigBuild.powerConsumptionTotal} Watts
                </div>
              </Row>
              <Row className="calculations-row">
                <h4>Revenue</h4>
              </Row>
            </Col>
          </Container> */}
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};
