import React from 'react';
import CardsWrapper from "./CardsWrapper";
import {Button} from "@mui/material";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Cards({productW,actions}) {
    return (
        <CardsWrapper>
              <div className="row pb-5">
                  {productW.map((items,index)=>
                      <div className="col-12 col-md-6 col-lg-3">
                          <div className="card">
                              <div className="card-body">
                                  <div className="mask">
                                      {actions && (
                                      <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                              {actions.edit && (
                                                  <Button className="editDelete"
                                                      onClick={() => actions.edit(index)}
                                                  >
                                                      <FontAwesomeIcon icon={faEdit} />
                                                  </Button>
                                              )}
                                              {actions.delete && (
                                                  <Button className="editDelete"
                                                      onClick={() => actions.delete(index)}
                                                  >
                                                      <FontAwesomeIcon  icon={faTrash} />
                                                  </Button>
                                              )}
                                      </div>
                                      )}
                                  </div>
                                  <img className="w-100 h-100" src={items.url} alt=""/>
                              </div>
                              <div className="card-footer">
                                  <h2>{items.name}</h2>
                                  <p>{items.price}</p>
                              </div>
                          </div>
                      </div>
                  )}
              </div>
        </CardsWrapper>
    );
}

export default Cards;