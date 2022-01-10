import React, { useState } from "react";
import "./PreviousRigBuild.css";
import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Row } from "react-bootstrap";
import { Badge, Button } from "react-bootstrap";

export const PreviousRigBuildCard = ({ rigBuild, gpuArray }) => {
  return (
    <>
      <Accordion.Item eventKey="" className="accordion-item">
        <Accordion.Header className="accordion-header">
          <Col>{rigBuild.date}</Col>
          <Col className="accordion-header__gpu-list">
            
              {gpuArray.map((gpu) => {
                console.log("SINGLE GPU - ", gpu);
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
        <Accordion.Body>
          <Container className="accordion-container">
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
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};
