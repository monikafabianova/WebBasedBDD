/**
 * generated by Xtext 2.32.0
 */
package dk.sdu.bdd.xtext.bddDsl.impl;

import dk.sdu.bdd.xtext.bddDsl.BddDslPackage;
import dk.sdu.bdd.xtext.bddDsl.ImperativeEntityRef;
import dk.sdu.bdd.xtext.bddDsl.ImperativeEntityStatePhrase;
import dk.sdu.bdd.xtext.bddDsl.ImperativeStateName;

import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.common.notify.NotificationChain;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Imperative Entity State Phrase</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link dk.sdu.bdd.xtext.bddDsl.impl.ImperativeEntityStatePhraseImpl#getEntity <em>Entity</em>}</li>
 *   <li>{@link dk.sdu.bdd.xtext.bddDsl.impl.ImperativeEntityStatePhraseImpl#getState <em>State</em>}</li>
 * </ul>
 *
 * @generated
 */
public class ImperativeEntityStatePhraseImpl extends MinimalEObjectImpl.Container implements ImperativeEntityStatePhrase
{
  /**
   * The cached value of the '{@link #getEntity() <em>Entity</em>}' containment reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getEntity()
   * @generated
   * @ordered
   */
  protected ImperativeEntityRef entity;

  /**
   * The cached value of the '{@link #getState() <em>State</em>}' reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getState()
   * @generated
   * @ordered
   */
  protected ImperativeStateName state;

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected ImperativeEntityStatePhraseImpl()
  {
    super();
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  protected EClass eStaticClass()
  {
    return BddDslPackage.Literals.IMPERATIVE_ENTITY_STATE_PHRASE;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public ImperativeEntityRef getEntity()
  {
    return entity;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public NotificationChain basicSetEntity(ImperativeEntityRef newEntity, NotificationChain msgs)
  {
    ImperativeEntityRef oldEntity = entity;
    entity = newEntity;
    if (eNotificationRequired())
    {
      ENotificationImpl notification = new ENotificationImpl(this, Notification.SET, BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__ENTITY, oldEntity, newEntity);
      if (msgs == null) msgs = notification; else msgs.add(notification);
    }
    return msgs;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public void setEntity(ImperativeEntityRef newEntity)
  {
    if (newEntity != entity)
    {
      NotificationChain msgs = null;
      if (entity != null)
        msgs = ((InternalEObject)entity).eInverseRemove(this, EOPPOSITE_FEATURE_BASE - BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__ENTITY, null, msgs);
      if (newEntity != null)
        msgs = ((InternalEObject)newEntity).eInverseAdd(this, EOPPOSITE_FEATURE_BASE - BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__ENTITY, null, msgs);
      msgs = basicSetEntity(newEntity, msgs);
      if (msgs != null) msgs.dispatch();
    }
    else if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__ENTITY, newEntity, newEntity));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public ImperativeStateName getState()
  {
    if (state != null && state.eIsProxy())
    {
      InternalEObject oldState = (InternalEObject)state;
      state = (ImperativeStateName)eResolveProxy(oldState);
      if (state != oldState)
      {
        if (eNotificationRequired())
          eNotify(new ENotificationImpl(this, Notification.RESOLVE, BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__STATE, oldState, state));
      }
    }
    return state;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public ImperativeStateName basicGetState()
  {
    return state;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public void setState(ImperativeStateName newState)
  {
    ImperativeStateName oldState = state;
    state = newState;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__STATE, oldState, state));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public NotificationChain eInverseRemove(InternalEObject otherEnd, int featureID, NotificationChain msgs)
  {
    switch (featureID)
    {
      case BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__ENTITY:
        return basicSetEntity(null, msgs);
    }
    return super.eInverseRemove(otherEnd, featureID, msgs);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public Object eGet(int featureID, boolean resolve, boolean coreType)
  {
    switch (featureID)
    {
      case BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__ENTITY:
        return getEntity();
      case BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__STATE:
        if (resolve) return getState();
        return basicGetState();
    }
    return super.eGet(featureID, resolve, coreType);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public void eSet(int featureID, Object newValue)
  {
    switch (featureID)
    {
      case BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__ENTITY:
        setEntity((ImperativeEntityRef)newValue);
        return;
      case BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__STATE:
        setState((ImperativeStateName)newValue);
        return;
    }
    super.eSet(featureID, newValue);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public void eUnset(int featureID)
  {
    switch (featureID)
    {
      case BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__ENTITY:
        setEntity((ImperativeEntityRef)null);
        return;
      case BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__STATE:
        setState((ImperativeStateName)null);
        return;
    }
    super.eUnset(featureID);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public boolean eIsSet(int featureID)
  {
    switch (featureID)
    {
      case BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__ENTITY:
        return entity != null;
      case BddDslPackage.IMPERATIVE_ENTITY_STATE_PHRASE__STATE:
        return state != null;
    }
    return super.eIsSet(featureID);
  }

} //ImperativeEntityStatePhraseImpl
