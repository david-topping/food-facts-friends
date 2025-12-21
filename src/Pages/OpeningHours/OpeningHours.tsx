import { Container, Row, Col, Table } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import CardItem from "../../components/CardItem/CardItem";
import ServiceStatus from "../../components/ServiceStatus/ServiceStatus";
import { openingHoursData } from "./openingHoursData";

// Group and merge hours by day
const groupHoursByDay = (
  hours: { day: string; open: string; close: string }[]
) => {
  const grouped: { [key: string]: string[] } = {};

  hours.forEach(({ day, open, close }) => {
    const timeRange = open && close ? `${open} - ${close}` : "Closed";
    if (!grouped[day]) {
      grouped[day] = [timeRange];
    } else {
      grouped[day].push(timeRange);
    }
  });

  return Object.entries(grouped).map(([day, timeRanges]) => ({
    day,
    times: timeRanges, // Keep as an array for mapping
  }));
};

const OpeningHours = () => {
  return (
    <>
      <Banner title="Our Opening Hours" />
      <Container className="my-5">
        <Row>
          {openingHoursData.map((item, idx) => {
            const groupedHours = groupHoursByDay(item.hours);

            return (
              <Col
                key={idx}
                md={4}
                className="mb-4 d-flex justify-content-center"
              >
                <CardItem
                  title={item.title}
                  subtitle={<ServiceStatus hours={item.hours} />}
                  description={
                    <Table striped bordered hover>
                      <tbody>
                        {groupedHours.map((hour, idx) => (
                          <tr key={idx}>
                            <td>
                              <strong>{hour.day}</strong>
                            </td>
                            <td>
                              {hour.times.map((time, idx) => (
                                <div key={idx}>{time}</div>
                              ))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  }
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default OpeningHours;
